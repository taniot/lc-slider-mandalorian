'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Prova Title',
      series: {
        title: 'The Mandalorian',
        images: [
          'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
          'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
          'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
          'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
          'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg',
        ],
        category: 'Adventure',
        length: 119,
      },
      currentIndex: 0,
    };
  },
  methods: {
    next() {
      console.log('ho cliccato su next');
      this.currentIndex++;

      if (this.currentIndex > this.series.images.length - 1) {
        this.currentIndex = 0;
      }
    },
    prev() {
      console.log('ho cliccato su prev');
      this.currentIndex--;

      if (this.currentIndex < 0) {
        this.currentIndex = this.series.images.length - 1;
      }
    },
    changeImage(index) {
      console.log('cambia immagine');
      console.log(index);
      this.currentIndex = index;
    },
    salutaTutti() {
      console.log('saluti a tutti');
    },
  },
  mounted() {
    this.salutaTutti();
  },
}).mount('#app');
