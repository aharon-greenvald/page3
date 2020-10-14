import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 names= [
    {"name":"aron","made":0,"missed":0,"points":0,"percentage":0,"team":0},
    {"name":"nisim","made":0,"missed":0,"points":0,"percentage":0,"team":0},
    {"name":"moti","made":0,"missed":0,"points":0,"percentage":0,"team":0},
    {"name":"yakov","made":0,"missed":0,"points":0,"percentage":0,"team":0},
    {"name":"israel","made":0,"missed":0,"points":0,"percentage":0,"team":0},
    {"name":"shlomo","made":0,"missed":0,"points":0,"percentage":0,"team":0}
  ];

  team1=[];
  team2=[];
  team1name ='';
  team2name ='';

   sumPlayer=0;
   
   sumTeam1Made=0;
   sumTeam1Missed=0;
   sum1All=0;
   sumTeam1Prec=0;


   sumTeam2Made=0;
   sumTeam2Missed=0;
   sum2All=0;
   sumTeam2Prec=0;


  addPlayer(player){
   

    if(this.team1.length<3){
      player.team=1;
      this.team1name+= player.name.charAt(0);
      console.log(this.team1name);
      
      this.team1.push(player);
    }else if(this.team2.length<3){
      player.team=2;
      this.team2name+= player.name.charAt(0);
      console.log(this.team2name);


      this.team2.push(player);

    }
  }
  missedBtn(player){
    console.log(player);
    player.missed++;
    this.sumPlayer =player.missed+player.made ;
    player.percentage = player.made / this.sumPlayer*100;
    if(player.team==1){
      this.sumTeam1Missed++;
      this.sum1All = this.sumTeam1Missed+this.sumTeam1Made;
      this.sumTeam1Prec = this.sumTeam1Made / this.sum1All*100;
  

    }else if(player.team==2){
      this.sumTeam2Missed++;
      this.sum2All = this.sumTeam2Missed+this.sumTeam2Made;
      this.sumTeam2Prec = this.sumTeam2Made / this.sum2All*100;
  }


    
  }
  madeBtn(player){
    console.log(player);
    player.made++;
    player.points+=2;
    this.sumPlayer =player.missed+player.made ;
    player.percentage = player.made / this.sumPlayer*100;
    if(player.team==1){
      this.sumTeam1Made++;
      this.sum1All = this.sumTeam1Missed+this.sumTeam1Made;
      this.sumTeam1Prec = this.sumTeam1Made / this.sum1All*100;
    
  

    }else if(player.team==2){
      this.sumTeam2Made++;
      this.sum2All = this.sumTeam2Missed+this.sumTeam2Made;
      this.sumTeam2Prec = this.sumTeam2Made / this.sum2All*100;
  }


}
}
