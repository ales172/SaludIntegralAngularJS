import { Component, OnInit, Input } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { TurnoAgregaComponent } from '../turno-agrega/turno-agrega.component';
import { addDurations } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input()
  set configurations(config: any) {
    if (config) {
      this.defaultConfigurations = config;
    }
  }
  @Input() eventData: any;
  
  defaultConfigurations: any;
  constructor(dialog: MatDialog) {
    this.defaultConfigurations = {
      locale: 'es',
      editable: false,
      eventLimit: false,
      droppable: false,
      eventResize: false,
      disableDragging: true,
      eventStartEditable: false,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'month,agendaWeek,agendaDay',
        right: 'title'
      },
      buttonText: {
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día'
      },
      views: {
        agenda: {
          eventLimit: 2
        }
      },
      allDaySlot: false,
      slotDuration: moment.duration('00:30:00'),
      slotLabelInterval: moment.duration('00:30:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [1, 2, 3, 4, 5],
        start: '7:00',
        end: '21:00',
      },
      minTime: "07:00",
      maxTime: "21:00",
      events: [
        { title: 'Alejandro Schulten', start:'2020-04-07 18:00', profesional:'Arizmendi, Camila'},
        { title: 'Damian Di Martino', date: '2020-04-07 16:00' },
      ],
      eventClick: function(calEvent, jsEvent, view) {

        alert('Event: ' + calEvent.title);
        alert('Profesional: ' + calEvent.profesional);
    
        // change the border color just for fun
        //$(this).css('border-color', 'red');
    
      },
      dayClick: function (date, jsEvent, view) {
        if (view.name == 'month') {
          $('#full-calendar').fullCalendar('changeView', 'agendaDay', date);
        } else {
          // leemos las fechas de inicio de evento y de hoy
          var evento = moment(date).format();
          var now = moment();
          // si el inicio de evento ocurre hoy o en el futuro mostramos el modal
          if (now.isBefore(evento)) {
            
            // showModal('Turno Nuevo', CreaTurno(date), null);
            openDialog(evento);
          }
          // si no, mostramos una alerta de error
          else {
            /*Swal.fire(
              'Error',
              'No se puede crear un turno para una fecha pasada',
              'warning'
            )*/
            alert('No se puede crear un turno para una fecha pasada')
          }
        }
      },
    };
    
  function openDialog(evento) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      fecha: evento,
      title: 'Crea Turno',
      //profesional:'',
      //paciente:''
    };
    
    dialog.open(TurnoAgregaComponent, dialogConfig);
    const dialogRef = dialog.open(TurnoAgregaComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }
  }
  ngOnInit() {
    $('#full-calendar').fullCalendar(
      this.defaultConfigurations,
    );
  }
}
