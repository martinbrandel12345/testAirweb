import { api } from 'src/boot/axios';

const TicketService = {
  baseUrl: 'https://test-feed.airweb.workers.dev',
  getTickets: () => {
    return api.get(`${TicketService.baseUrl}/products`);
  },
  getTicket: (id: number) => {
    return api.get(`${TicketService.baseUrl}/products/${id}`);
  },
  getCategories: () => {
    return api.get(`${TicketService.baseUrl}/categories`);
  },
  getCategory: (id: number) => {
    return api.get(`${TicketService.baseUrl}/categories/${id}`);
  },
};

export default TicketService;
