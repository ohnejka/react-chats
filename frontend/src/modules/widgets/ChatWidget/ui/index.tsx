import { InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FC } from 'react';
import styles from './ChatWidget.module.scss';
import { MessageRow, MessageRowPropsMessage } from './MessageRow';

const ChatWidget: FC = () => {
  const message: MessageRowPropsMessage = {
    id: '1',
    content: 'sdfsfr',
    createdAt: new Date(Date.now()),
    author: { username: 'Jenya' },
    isMine: true,
    isEditing: false,
  };

  return (
    <section className={styles.chat}>
      <div className={styles.chat__top}>
        <MessageRow message={message} onDelete={() => {}} onEdit={() => {}} />
      </div>

      <div>
        <form onSubmit={() => {}} className={styles.chat__form}>
          <InputBase
            className={styles.chat___input}
            placeholder='Enter message'
            inputProps={{ 'aria-label': 'enter message' }}
          />
          <IconButton
            type='submit'
            className={styles.chat__send}
            aria-label='send'
          >
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </section>
  );
};

export { ChatWidget };
