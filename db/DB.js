import { CustomerDto } from "../dto/CustomerDto.js";
import { ItemDto } from "../dto/ItemDto.js";
import { OrderDto } from "../dto/OrderDto.js";
import { OrderDetailDto } from "../dto/OrderDetailDto.js";

export let customers = [
  new CustomerDto('C00-001', 'Malaka Silwa', 'No17, Panadura', 100.00),
  new CustomerDto('C00-002', 'Wasitha Dilshan', 'Panadura', 200.00)
];

export let items = [
  new ItemDto('I00-001', 'Corn Flower', 100, 48),
  new ItemDto('I00-002', 'Mackerel ', 300, 150),
  new ItemDto('I00-003', 'Milk Powder', 850, 340)
];

const orderDetails1 = [
  new OrderDetailDto('O00-001', 'I00-001', 'Corn Flower', 100, 48, 5, 500), 
  new OrderDetailDto('O00-001', 'I00-002', 'Mackerel', 300, 150, 2, 600)
];

const orderDetails2 = [
  new OrderDetailDto('O00-002', 'I00-001', 'Corn Flower', 100, 48, 5, 500),
  new OrderDetailDto('O00-002', 'I00-002', 'Mackerel', 300, 150, 2, 600),
  new OrderDetailDto('O00-002', 'I00-003', 'Milk Powder', 850, 340, 1, 850)
];

export let orders = [
  new OrderDto('O00-001', '6/11/2024', 'C00-001', 'Malaka Silwa', 'No17, Panadura', 100.00, 850.00, 1000.00, 150.00, 900.00, 50.00, orderDetails1),
  new OrderDto('O00-002', '6/11/2024', 'C00-002', 'Wasitha Dilshan', 'Panadura', 200.00, 850.00, 1000.00, 150.00, 900.00, 50.00, orderDetails2)
];