import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasks: Array<any> = [];

  constructor(private alertController : AlertController) { 
    this.tasks = [
      {title:'Training', status: 'started'}, 
      {title:'Runnig', status: 'started'}, 
      {title:'Biking', status: 'started'}, 
      {title:'Swimming', status: 'started'}
      ];
  }

  ngOnInit() {
  }

  /*async addItem() {
    const alert = await this.alertController.create({ 
      header: 'Alert',
      subHeader: 'This is an Alert',
      message: 'Your dialog is incorrect!',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async addItem() {
    const confirm = await this.alertController.create({ 
      header: 'Confirmation',
      message: 'Do you want to exit',
      buttons: [ 
        {text: 'Ok', role: 'Ok', handler: () =>
            { console.log('Confirm Ok'); }}, 
        {text: 'Cancel', role: 'Cancel', handler: () => 
            { console.log('Confirm Cancel.'); }}
      ]
    });
    await confirm.present();
    const result = await confirm.onDidDismiss();
    console.log(result);
  }

  async addItem() {
    const alert = await this.alertController.create(
      { inputs: [ 
        { name: 'radio 1', type: 'radio', label: 'Java', value: 'Java'},
        { name: 'radio 2', type: 'radio', label: 'Python', value: 'Python', checked: true},
        ],
        buttons: [ 
          {text: 'Save', handler: data => { console.log('Save clicked'); }}, 
          {text: 'Cancel', handler: data => { console.log('Cancel clicked');}}
        ]
      });
    await alert.present();
    }*/

    
    async addItem() {
      const prompt = await this.alertController.create({ 
        header: 'Add Task/Notes',
        message: 'Enter the Task/Note',
        inputs: [ 
          { name: 'title', type: 'text', placeholder: 'Task/Note name'}, 
        ],
        buttons: [ 
          { text: 'Cancel', handler: () => { console.log('Cancel clicked'); }
        }, 
          { text: 'Save', handler: data => { 
              if (data.title !== ''){
                  this.tasks.push({ title: data.title, status:'started'});
                  console.log('title: ' +
                    this.tasks[this.tasks.length-1].title); 
                  console.log('status: ' +
                    this.tasks[this.tasks.length-1].status); } } 
          }
        ] });
      await prompt.present(); 
    }

    /*async addItem() {
      const alert = await this.alertController.create({ 
      header: 'Games',
      message: 'Select your favourite game',
      inputs: [ 
        {name: 'checkbox', type: 'checkbox', label: 'Hockey', value: 'Hockey'},
        {name: 'checkbox', type: 'checkbox', label: 'Cricket', value: 'Cricket', checked: true},
        {name: 'checkbox', type: 'checkbox', label: 'Badminton', value: 'Badminton',}
      ],
      buttons: [ 
        { text: 'Save', handler: () => { console.log('Save clicked'); }},
        {text: 'Cancel', handler: data => { console.log('Cancel clicked'); }}
      ]
    });
    await alert.present();
  }*/

  markAsFinished(t: any, slidingItem: any) { 
    t.status = "finished";
    console.log('task ' + t.title + ' finished'); 
  }

  remTaskNote(t: any, slidingItem: any) {
    t.status = "removed";
    console.log('task ' + t.title + ' removed'); 
    let index = this.tasks.indexOf(t);
    if (index > -1) { 
      this.tasks.splice(index, 1);
    } 
  }

}
