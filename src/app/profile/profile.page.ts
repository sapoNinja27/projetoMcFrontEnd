import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/models/cliente.dto';
import { AuthService } from 'src/services/auth.service';
import { ClienteService } from 'src/services/domain/cliente.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  cliente : ClienteDTO;
  constructor(public authService: AuthService,
    public clienteService: ClienteService ) { }

  ngOnInit() {
    let localUser=this.authService.checkUser();
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response =>{
        this.cliente=response;
        //TODO buscar imagem
        this.cliente.imageUrl="assets/avatar-blank.jpg";
        // this.getImageIfExists();
      },
      error=>{})
    }
  }
  getImageIfExists(){
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response=>{
      // this.cliente.imageUrl=`${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
      this.cliente.imageUrl="assets/avatar-blank.jpg";
    },
    error=>{

    });
  }

}
