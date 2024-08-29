import { ReactNode } from 'react';

interface AppPage {
    title: string;
    url: string;
    roles: string[];// Agregamos roles para definir qué rol puede acceder a cada página
    component : ReactNode; 
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Manage Users',
      url: '/user/manage-users',
      roles: ['admin'],
      component: '',
    },
    {
      title: 'Create Work Groups',
      url: '/user/create-groups',
      roles: ['admin'],
      component: '',


    },
    {
      title: 'View Projects',
      url: '/user/view-projects',
      roles: ['admin','mentor', 'mentee'],
      component: '',


    },
    {
      title: 'Create Users',
      url: '/user/create-users',
      roles: ['mentor'],
      component: '',


    },
    {
      title: 'Edit Users',
      url: '/user/edit-users',
      roles: ['mentor'],
      component: '',


    },
    {
      title: 'View Participants',
      url: '/user/view-participants',
      roles: ['mentor'],
      component: '',


    },
    {
      title: 'My Projects',
      url: '/user/my-projects',
      roles: ['mentee'],
      component: '',


    },
    {
      title: 'New Projects',
      url: '/user/new-projects',
      roles: ['Admin'],
      component: '',
    }
  ];
  
  export default appPages;