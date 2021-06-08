<template>
  <div>
     <button type="button" id="add-request" @click="addRequest">Добавить заявку</button>
     <br>
     <br>
     <table class="filters__table" style="width: 600px;">
              <thead style="background: #fc0">
               <tr>
                <td> Организация 
                  <button type="button" class="filters__button">BUTTON</button>
                </td>
                <td> Статус 
                  <button type="button" class="filters__button">BUTTON</button>
                </td>
                <td> Приоритет 
                  <button type="button" class="filters__button">BUTTON</button>
                </td>
                <td> Тип 
                  <button type="button" class="filters__button">BUTTON</button>
                </td> 
                <td> Заявитель 
                  <button type="button" class="filters__button">BUTTON</button>
                </td>
                <td> Наименование 
                  <button type="button" class="filters__button">BUTTON</button>
                </td> 
                <td> Исполнитель 
                  <button type="button" class="filters__button">BUTTON</button>
                </td>
               </tr> 
              </thead>
              <tbody v-for="item in items" v-bind:key="item.id" style="background: #ccc">
               <tr>
                <td> {{item.organization}} </td>
                <td> {{item.status}} </td>
                <td> {{item.priority}} </td>
                <td> {{item.type}} </td>
                <td> {{item.applicant}} </td>
                <td> {{item.name}} </td> 
                <td> {{item.performer}} </td>
                <button type="button" id="edit-request" class="edit">Редактировать заявку</button>
                <button type="button" id="delete-request" class="delete" @click="deleteRequest">Удалить заявку</button>
               </tr> 
              </tbody>
             </table>
  </div>
</template>

<script>
export default {
  name: 'TestTable',
  props: {
   name: String
  },
  data() {
    return {
     items: [
       {
         id: 1,
         organization: 'Мех-Сервис',
         status: 'Принята',
         priority: 'Средний',
         type: 'Сообщение об ошибке',
         applicant: 'Иванов',
         name: 'Тестовая заявка',
         performer: 'Петров'  
       },
       {
         id: 2,
         organization: 'ЦАП',
         status: 'Отказано',
         priority: 'Низкий',
         type: 'Сообщение об улучшении',
         applicant: 'Махмутов',
         name: 'Тестовая заявка',
         performer: 'Шайдуллин'  
       },
       {
         id: 3,
         organization: 'Энерго-сервис',
         status: 'Принята',
         priority: 'Средний',
         type: 'Заявка на установку',
         applicant: 'Максимов',
         name: 'Тестовая заявка',
         performer: 'Ахметов'  
       }
     ]
    }
  },
  methods: {
    addRequest() {
      console.log(this.items[this.items.length - 1]);
      let lastId = this.items[this.items.length - 1].id;
      let newRow = {
        id: lastId,
        organization: 'ООО',
        status: 'Принята',
        priority: 'Средний',
        type: 'Заявка на установку',
        applicant: 'Халитов',
        name: 'Тестовая заявка',
        performer: 'Самойлов'
      }
      this.items.push(newRow);
      console.log(this.items);
    },
    deleteRequest(event) {
      console.log(event.target.parentNode.parentNode);
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
  }
}
</script>

<style>
  .filters__table {
    margin: 0 auto;
  }
  .edit {
    background-color: green;
  }
  .delete {
    background-color: red;
  }
</style>