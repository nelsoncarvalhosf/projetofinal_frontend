<template>
  <div id="events-list" class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1 class="text-center">Lista de Eventos</h1>
        <form v-on:submit.prevent="addNewEvent">
          <div class="group-form">
            <label for="titulo">Titulo do Evento*</label>
            <input
              v-model="eventtitulo"
              type="text"
              id="titulo"
              class="form-control"
              placeholder="Titulo do evento..."
            />
          </div>
          <div class="form-row">
            <div class="group-form col-md-6">
              <label for="tipo">Tipo de Evento*</label>
              <select v-model="eventtipo" id="tipo" class="form-control">
                <option value disabled selected hidden>Selecione um tipo...</option>
                <option value="0">Evento Gratuito</option>
                <option value="1">Evento Pago</option>
              </select>
            </div>
            <div class="group-form col-md-6">
              <label for="capacidade">Capacidade*</label>
              <input
                v-model="eventcapacidade"
                type="text"
                id="capacidade"
                class="form-control"
                placeholder="Numero de participantes..."
              />
            </div>
          </div>
          <div class="group-form">
            <label for="pelestrante">Palestrante*</label>
            <input
              v-model="eventpalestrante"
              type="text"
              id="pelestrante"
              class="form-control"
              placeholder="Palestrante do evento..."
            />
          </div>
          <div class="form-row">
            <div class="group-form col-md-6">
              <label for="datainicial">Data Inicial*</label>
              <input v-model="eventdatainicial" type="date" id="datainicial" class="form-control" />
            </div>
            <div class="group-form col-md-6">
              <label for="horainicial">Hora Inicial*</label>
              <input v-model="eventhorainicial" type="time" id="horainicial" class="form-control" />
            </div>
          </div>
          <div class="form-row">
            <div class="group-form col-md-6">
              <label for="datafinal">Data Final*</label>
              <input v-model="eventdatafinal" type="date" id="datafinal" class="form-control" />
            </div>
            <div class="group-form col-md-6">
              <label for="horafinal">Hora Final*</label>
              <input v-model="eventhorafinal" type="time" id="horafinal" class="form-control" />
            </div>
          </div>
          <div class="group-form">
            <label for="descricao">Descrição*</label>
            <textarea v-model="eventdescricao" id="descricao" class="form-control"></textarea>
          </div>
          <div class="group-form">
            <label for="video">Video Divulgação</label>
            <input
              v-model="eventvideo"
              type="text"
              id="video"
              class="form-control"
              placeholder="Vídeo do evento..."
            />
          </div>
          <button
            v-if="this.isEdit == false"
            type="submit"
            class="btn btn-success btn-block mt-3"
          >Cadastrar</button>
          <button
            v-else
            type="button"
            v-on:click="updateEvent()"
            class="btn btn-primary btn-block mt-3"
          >Alterar</button>
        </form>

        <table class="table">
          <tr v-for="(event) in events" v-bind:key="event.id" v-bind:title="event.titulo">
            <td class="text-left">{{event.titulo}}</td>
            <td class="text-right">
              <button v-on:click="editEvent(event.id,event.titulo,event.tipo,event.capacidade,event.palestrante,
              event.datainicial,event.horainicial,event.datafinal,event.horafinal,event.descricao,event.video)" class="btn btn-info">Editar</button>
              <button v-on:click="deleteEvent(event.id)" class="btn btn-danger">Excluir</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      events: [],
      id: "",
      eventtitulo: "",
      eventtipo: "",
      eventcapacidade: "",
      eventpalestrante: "",
      eventdatainicial: "",
      eventhorainicial: "",
      eventdatafinal: "",
      eventhorafinal: "",
      eventdescricao: "",
      eventvideo: "",
      isEdit: false
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      axios({ method: "GET", url: "/api/events" }).then(
        result => {
          console.log(result.data);
          this.events = result.data;
        },
        error => {
          console.error(error);
        }
      );
    },
    addNewEvent(){
      axios.post("/api/events", {titulo: this.eventtitulo,tipo: this.eventtipo, capacidade: this.eventcapacidade,
      palestrante: this.eventpalestrante, datainicial: this.eventdatainicial, horainicial: this.eventhorainicial,
      datafinal: this.eventdatafinal, horafinal: this.eventhorafinal, descricao: this.eventdescricao,
      video_divulgacao: this.eventvideo}).then(res => {
        this.eventtitulo = ''
        this.eventtipo = ''
        this.eventcapacidade = ''
        this.eventpalestrante = ''
        this.eventdatainicial = ''
        this.eventhorainicial = ''
        this.eventdatafinal = ''
        this.eventhorafinal = ''
        this.eventdescricao = ''
        this.eventvideo = ''
        this.getEvents()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    editEvent(id, titulo, tipo, capacidade, palestrante, datainicial, horainicial, datafinal, horafinal, descricao, video){
      this.id = id
      this.eventtitulo = titulo
      this.eventtipo = tipo
      this.eventcapacidade = capacidade
      this.eventpalestrante = palestrante
      this.eventdatainicial = datainicial
      this.eventhorainicial = horainicial
      this.eventdatafinal = datafinal
      this.eventhorafinal = horafinal
      this.eventdescricao = descricao
      this.eventvideo = video
      this.isEdit = true
    },
    updateEvent(){
      axios.put(`/api/events/${this.id}`,
      {titulo: this.eventtitulo}).then(res => {
        this.eventtitulo = ''
        this.eventtipo = ''
        this.eventcapacidade = ''
        this.eventpalestrante = ''
        this.eventdatainicial = ''
        this.eventhorainicial = ''
        this.eventdatafinal = ''
        this.eventhorafinal = ''
        this.eventdescricao = ''
        this.eventvideo = ''
        this.isEdit = false
        this.getEvents()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteEvent(id){
      axios.delete(`/api/events/${id}`).then(res => {
        this.eventtitulo = ''
        this.eventtipo = ''
        this.eventcapacidade = ''
        this.eventpalestrante = ''
        this.eventdatainicial = ''
        this.eventhorainicial = ''
        this.eventdatafinal = ''
        this.eventhorafinal = ''
        this.eventdescricao = ''
        this.eventvideo = ''
        this.getEvents()
        console.log(res)
      })
      .catch(er => {
        console.log(err)
      })
    }
  }
};
</script>
