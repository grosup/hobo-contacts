import { defineStore } from "pinia";
import { clientService } from "@/common/storage.service.js";

export const useClientstore = defineStore("customer", {
  state: () => ({
    clients: [],
    client: {},
  }),
  getters: {
    clientList: (state) =>
      state.clients.map((client) => {return {title: client.name, value: client.id}; }),
  },
  actions: {
    getClients() {
      console.log("store - getClients fired");
      this.clients = clientService.list();
      console.log("store - getClients state :" + JSON.stringify(this.clients));
    },
    addClient(client) {
      clientService.add(client);
      this.getClients();
    },
    deleteClient(id) {
      clientService.delete(id);
      this.getClients();
    },
    getClient(id) {
      this.client = clientService.get(id);
    },
    editClient(id, client) {
      clientService.edit(id, client);
      this.getClients();
    },
  },
});
