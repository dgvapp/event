import { Injectable } from '@angular/core';

import { HomePage, LoginPage } from '../../pages';

export interface MenuInterface {
  title: string;
  component?: any;
  notification?: number;
  icon?: string;
  subPages?: MenuInterface[];
}

@Injectable()
export class MenuService {

  itens: MenuInterface[] = [
    { title: "Inicio", component: HomePage, icon: "home" },
    { title: "Minhas Publicações", component: null, icon: "list-box", },
    // { title: "Favoritos", component: HomePage, icon: "heart-outline" },
    { title: "Configurações", component: null, icon: "cog" },
    { title: "Sair", component: LoginPage, icon: "log-out" }
  ];

  public getAll() : MenuInterface[] {
    return this.itens;
  }

  constructor() { }

}