import { ChatWidget } from '../../modules/widgets/ChatWidget/ui';

const App = () => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <ChatWidget />
    </section>
  );
};

export default App;
