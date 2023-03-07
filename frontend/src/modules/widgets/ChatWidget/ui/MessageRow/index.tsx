import { FC } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import clsx from 'clsx';
import styles from './MessageRow.module.scss';

export type MessageRowPropsMessage = {
  id: string;
  content: string;
  createdAt: Date;
  author: {
    username: string;
  };
  isMine: boolean;
  isEditing: boolean;
};

interface MessageRowProps {
  message: MessageRowPropsMessage;
  onEdit: () => void;
  onDelete: () => void;
}

export const MessageRow: FC<MessageRowProps> = (props: MessageRowProps) => {
  const { message, onEdit, onDelete } = props;

  return (
    <div
      className={clsx(
        styles.messagerow,
        message.isEditing && styles.editing,
        message.isMine && styles.mine
      )}
    >
      <div className={styles.messagerow__data}>
        <div className={styles.messagerow__body}>
          <span>{message.content}</span>
        </div>
        <div>
          <div className={styles.messagerow__date}>
            {message.author.username} <br />
            {message.createdAt.toISOString()}
          </div>
        </div>
      </div>

      {message.isMine && !message.isEditing && (
        <div style={{ display: 'flex' }}>
          <IconButton onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};
