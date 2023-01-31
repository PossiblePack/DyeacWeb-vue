import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from "../page/Dashboard-page.vue";
import RegisterPatient from "../page/Register-patient.vue";
import Patient from "../page/Patient-information.vue";
import Medicine from "../page/Medicine-page.vue";
import Appointment from "../page/Appointment-table.vue";

const routes =  [
    {path: '/', name: 'Dashboard', component: Dashboard },
    {path: '/medicine', name: 'Medicine', component: Medicine },
    {path: '/patient', name: 'Patient', component: Patient },
    {path: '/appointment', name: 'Appointment', component: Appointment },
    {path: '/registerpatient', name: 'RegisterPatient', component: RegisterPatient },   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router