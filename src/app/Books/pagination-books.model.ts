import { Books } from './books.model';

export interface PaginationBook {
  pageSize: number;
  page: number;
  sort: string;
  sortDirection: string;
  pageQuantity: number;
  data: Books[];
  filterValue: {};
  totalRows: number;
}
