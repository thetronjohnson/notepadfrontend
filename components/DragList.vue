<template>
  <section>
    <div class="columns is-mobile">
     
    <div class="column">
        <draggable id="high" data-source="juju" class="list-group" draggable=".item" group="a" v-bind="dragOptions" @start="drag = true"
        @end="drag = false">
          <p class="priority high">High</p>
          <div
            class="max-w-sm rounded shadow-lg card list-group-item item"
            v-for="element in high"
            :key="element.title"
          >
           <div class="notification is-white">
              <button class="delete"></button>
              <h2 class="title">{{ element.title}}</h2>
              <hr/>
              <p>{{ element.note }}</p>
              <p>{{ element.date }}</p>
            </div>
          </div>
        </draggable>
      </div>

       <div class="column">
        <draggable id="medium" data-source="juju"  class="list-group" draggable=".item" group="a" v-bind="dragOptions" @start="drag = true"
        @end="drag = false">
        <p class="priority medium">Medium</p>

          <div
            class="max-w-sm rounded shadow-lg card list-group-item item"
            v-for="element in medium"
            :key="element.title"
          >
            <div class="notification is-white">
              <button class="delete"></button>
              <h2 class="title">{{ element.title}}</h2>
              <hr/>
              <p>{{ element.note }}</p>
              <p>{{ element.date }}</p>
            </div>
          </div>
        </draggable>
      </div>

       <div class="column">
        <draggable id="low" data-source="juju" class="list-group" draggable=".item" group="a" v-bind="dragOptions" @start="drag = true"
        @end="drag = false">
        
                  <p class="priority low">Low</p>

          <div
            class="max-w-sm rounded shadow-lg card list-group-item item"
            v-for="element in low"
            :key="element.title"
          >
            <div class="notification is-white">
              <button class="delete"></button>
              <h2 class="title">{{ element.title}}</h2>
              <hr/>
              <p>{{ element.note }}</p>
              <p>{{ element.date }}</p>
            </div>
          </div>
        </draggable>
      </div>

    </div>   
      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: "DragList",
  data() {
    return {
      high: [
        { title: "tata 1", note: "hello", date: "2020" },
        { title: "tata 2", note: "text", date: "2020" },
        { title: "tata 3", note: "halo", date: "2020" }
      ],
      medium: [
        { title: "eaea 1", note: "hello", date: "2020" },
        { title: "eaea 2", note: "text", date: "2020" },
        { title: "eaea 3", note: "halo", date: "2020" }
      ],
      low: [
        { title: "qeqe 1", note: "hello", date: "2020" },
        { title: "qeqe 2", note: "text", date: "2020" },
        { title: "qeqe 3", note: "halo", date: "2020" }
      ]
    };
  },
  computed:{
      dragOptions() {
      return {
        animation: 250,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
  }
  }
};
</script>

<style scoped>
.priority{
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    padding-bottom: 20px;
    color: black;
    padding-top: 20px;
    margin-bottom: 10px;
}
.high{
    background: hsl(348, 100%, 61%);
}
.medium{
    background:hsl(48, 100%, 67%);
}
.low{
    background:hsl(204, 86%, 53%);
}
.notification{
    cursor:-moz-grabbing;
    cursor:-webkit-grabbing;
    cursor:grab;
    margin-bottom: 10px;
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.notification:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.03)
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.title{
    font-size: 22px;
}
</style>