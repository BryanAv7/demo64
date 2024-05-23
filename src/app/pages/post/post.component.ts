import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common'; 


// defino la estructura de un post

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  mostrarDetalles: boolean; 
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  posts: Post[] = []; // Arreglo para almacenar las publicaciones
  photos: any; // Variable para almacenar las fotos


  constructor(private postService: PostService){}    // recibo el servicio PostService

  ngOnInit(){
    this.postService.getAllPost().subscribe(data =>{
      this.posts = Object.values(data).map((post: Post) => ({ ...post, mostrarDetalles: false }));
    });

    this.postService.getAllPhotos().subscribe(data =>{
      this.photos = data; // Asigno los datos de las fotos a la variable 
    });
  }

  verdetalles(post: Post) {   //mostrar o ocultar detalles de un post
    post.mostrarDetalles = !post.mostrarDetalles;
  }

}