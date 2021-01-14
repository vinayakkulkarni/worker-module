<template>
  <div>
    {{ worker }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        worker: {},
      };
    },
    mounted() {
      console.log('this: ', this);
      console.log('this.$worker', this.$worker);
      this.$worker.send({
        sleep: 10,
        type: 'geojson',
      });
      this.$worker.receive(({ data }) => {
        this.worker = data;
        console.log('data', data);
      });
    },
  };
</script>
