import { Component, OnInit, Renderer2 } from '@angular/core';
import { DiscussionService } from './discussion.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'chuva-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  public form!: FormGroup;

  showReplies = false;

  constructor(
    public discussionService:DiscussionService,
    private formBuilder:FormBuilder,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      subject: [{
        value:'',
        disabled: false
      },[
        Validators.required,
      ]],
      content: [{
        value:'',
        disabled: false
      },[
        Validators.required,
      ]],
      author: [{
        value:'',
        disabled: false
      },[
        Validators.required,
      ]],
    });
  }

  submit(){
    this.discussionService.discussions.push({
      subject:`${this.form.value.subject}`,
      author:`${this.form.value.author}`,
      likes:0,
      message:`${this.form.value.content}`,
      liked:false,
      replies:[]
    })
  }

  createTopic(){
    let topcontent = document.querySelector('#topcontent') as HTMLLIElement
    let createTopic = document.querySelector('#create-topic') as HTMLLIElement
    topcontent.style.display = 'none'
    createTopic.style.display = 'flex'
  }

  likeDiscuss(discussion:any){
    if(!discussion.liked){
      discussion.likes += 1;
      discussion.liked = true
    }
    else{
      discussion.likes -= 1;
      discussion.liked = false
    }
  }

  toggleReplies(){

  }
}
