export type ReadStatus = "read" | "pending" | "sent";

export interface ChatItem {
  from: string;
  time: Date;
  readStatus: ReadStatus;
  text: string;
}
