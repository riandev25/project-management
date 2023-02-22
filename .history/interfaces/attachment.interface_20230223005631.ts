export interface IAttachmentObject {
  _id: string;
  cloudinary_id: string;
  file_url: string;
  idCard: string;
  name: string;
  type: string;
  uploaded_at: string;
  uploaded_on: string;
}

export interface IAttachment {
  attachment?: IAttachmentObject[];
}
