<template>
  <div>
       <!-- Stepper Secion -->
  <div class="container">
    
  <md-steppers :md-active-step.sync="active" md-vertical md-linear>
      <md-step id="first" md-label="Personal Information" md-description="Required" :md-editable="false" :md-done.sync="first">
         <font-awesome-icon :icon="['fas', 'user-circle']" class="formIcons" />
        <md-field>
      <label>Fullname</label>
      <md-input type="text" v-model="fullname">
      </md-input>
    </md-field>
    <md-field>
      <label>Email address</label>
      <md-input type="email" v-model="email"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input type="password" v-model="password"></md-input>
    </md-field>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Next <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-2" /></md-button>
       <!-- <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button> -->
      </md-step>

      <md-step id="second" md-label="Business Information" md-description="require" :md-editable="false" :md-done.sync="first">
         <font-awesome-icon :icon="['fas', 'building']" class="formIcons" />
        <md-field>
      <label>Company Name</label>
      <md-input type="text" v-model="company_name"></md-input>
    </md-field>
     <md-field>
          <md-select v-model="type_of_service" name="type_of_service" id="type_of_service" placeholder="Type of service">
          <md-option value="hospital">
            <font-awesome-icon :icon="['fas', 'user-circle']" />Hospital</md-option>
            <md-option value="law">Law</md-option>
            <md-option value="bar">Bar</md-option>
            <md-option value="boutique">Boutique</md-option>
          </md-select>
        </md-field>
     <md-field>
      <label>Company description</label>
      <md-textarea md-autogrow v-model="company_description" maxlength="200"></md-textarea>
    </md-field>
        <md-button class="md-raised bg-secondary text-white" @click="setDone('second', 'first')">Previous<font-awesome-icon :icon="['fas', 'chevron-up']" class="ml-2" /></md-button>
        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Next<font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-2" />
        </md-button>
      </md-step>

      <md-step id="third" md-label="Others" :md-editable="false" :md-done.sync="third">
      <br class="mb-10" />
      <md-toolbar class="md-dense bg-warning">
        <h5 class="md-title"><font-awesome-icon class="mr-3" :icon="['fas', 'exclamation-triangle']" />If there are any changes you want to make, kindly press PREVIOUS</h5>
      </md-toolbar>
         <md-button class="md-raised bg-secondary text-white" @click="setDone('third', 'second')">Previous<font-awesome-icon :icon="['fas', 'chevron-up']" class="ml-2" /></md-button>
        <md-button class="md-raised md-primary"  @click="setDone('third');">Finish</md-button>
      </md-step>
    </md-steppers>


  </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      fullname: '',
      email: '',
      password: '',
      company_name: '',
      type_of_service: '',
      company_description: '',
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      showNavigation: false,
      showSidepanel: false,
    }
  },
  methods: {
    setDone (id, index) {
    this[id] = true
    if (index) { this.active = index }
  }
}
}
</script>

<style scoped>
/* Container */
@media only screen and (min-width: 1024px) {
  .container {
    width: 50%;
  }
}

   /* Form Icons */
  .formIcons{
    color:#448cff;
    font-size: 500%;
  }
</style>
