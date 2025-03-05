import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;
  posts: any[] = [];
  selectedPost: any = null;
  newPost: any = {
    code: '',
    version: '',
    date: '',
    designation: '',
    interim: '',
    formations: '',
    experiences: '',
    contraintesTechniques: '',
    contraintesMetiers: '',
    delais: ''
  };

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getAllPosts();
  }

  // Initialize the form
  initializeForm(): void {
    this.postForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}-[A-Z]{2}-\d{2}$/)]],
      version: ['', [Validators.required, Validators.pattern(/^\d{2}$/)]],
      date: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      interim: ['', [Validators.required]],
      formations: ['', [Validators.required]],
      experiences: ['', [Validators.required]],
      contraintesTechniques: ['', [Validators.required]],
      contraintesMetiers: ['', [Validators.required]],
      delais: ['', [Validators.required]]
    });
  }

  // Fetch all posts
  getAllPosts(): void {
    this.postService.getAll().subscribe((data) => {
      this.posts = data;
    });
  }

  // Save or update a post
  savePost(): void {
    if (this.postForm.valid) {
      if (this.selectedPost) {
        // Update existing post
        this.postService.update(this.selectedPost.id, this.postForm.value).subscribe(() => {
          this.getAllPosts();
          this.selectedPost = null;
          this.postForm.reset();
        });
      } else {
        // Create new post
        this.postService.create(this.postForm.value).subscribe(() => {
          this.getAllPosts();
          this.postForm.reset();
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  // Select a post for updating
  selectForUpdate(post: any): void {
    this.selectedPost = { ...post }; // Clone the post to prevent direct mutations
    this.postForm.patchValue(post);
  }

  // Cancel updating
  cancelUpdate(): void {
    this.selectedPost = null;
    this.postForm.reset();
  }

  // Delete a post
  deletePost(id: number): void {
    this.postService.delete(id).subscribe(() => {
      this.getAllPosts();
    });
  }
}