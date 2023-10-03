export interface Pop {
  id: number;
  context_key: string;
  resource_id: number;
  constructor_id: number;
  utm_id: number;
  chunk: string;
  values: Values;
  menuindex: number;
  baseblock_id: number;
  published: number;
  publishedon: number;
  publishedby: number;
  createdby: number;
  createdon: number;
  editedby: number;
  editedon: number;
  deleted: number;
  deletedon: number;
  deletedby: number;
}

export interface Values {
  title: string;
  button: Button;
}

export interface Button {
  caption: string;
}
