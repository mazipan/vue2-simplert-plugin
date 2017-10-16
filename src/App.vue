<template>
  <div id="app" class="app">
    <section class="hero is-primary is-medium">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image is-128x128" style="margin:auto;">
          <img src="https://github.com/vuejs/awesome-vue/raw/master/logo.svg?sanitize=true">
        </figure>
        
        <h1 class="title">
          awesome-vue-list
        </h1>
        <h2 class="subtitle">
          A curated list of awesome things related to Vue.js base on awesome-vue repository
        </h2>
        <a class="button is-primary is-inverted is-outlined" 
            href="https://github.com/mazipan/awesome-vue-list/issues">
            Add new awesome thing
        </a>
      </div>
    </div>
  </section>

    <div class="container is-fluid" style="margin-top: 20px;">      
      <div class="columns is-centered" v-for="item in items" :key="item.link">
        <div class="column is-8">
          
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{item.name}}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                
                
                <p class="title is-4" v-if="item.description">{{item.description}}</p>
                <p class="title is-4" v-if="!item.description">{{item.name}}</p>

                <p class="subtitle is-6" v-if="item.author">Author {{item.author}}</p>
                

                Link : <a :href="item.link" v-if="item.link" target="_blank">
                  <span class="icon has-text-info">
                    <i class="fa fa-external-link"></i>
                  </span>
                </a>

                <div class="tags" v-if="item.group">
                  <span class="tag is-primary" v-if="item.groupParent">{{item.groupParent}}</span>
                  <span class="tag is-info">{{item.group}}</span>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import groups from './awesome-vue-group.js'
import items from './awesome-vue.js'

export default {
  name: 'app',
  data() {
    return {
      groups: groups.groups,
      items: items.items
    }
  },
  mounted () {
    this.items = this.getGroupDetail()
  },
  methods: {
    getGroupDetail: function () {
      let self = this
      let newItems = self.items.map(function(item){
        let groups = self.groups.filter(function (group){
          return item.group === group.groupId
        })
        let groupObj = groups[0]
        let obj = Object.assign({}, item, groupObj)
        return obj
      })

      return newItems
    }
  }
}
</script>

<style lang="css" src="./app.css"></style>