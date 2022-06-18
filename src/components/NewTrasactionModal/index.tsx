import { useState, FormEvent } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";
import { Container, TransactionTypeRadioBox, TransactionTypeContainer } from "./style";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    
    const data = {title, value, category, type}

    api.post('/transactions', data).then(() => onRequestClose());
  }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Cadastrar transação"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          
          <input 
            placeholder="Título" 
            value={title} 
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            placeholder="Valor" 
            type="number"
            value={value}
            onChange={event => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <TransactionTypeRadioBox 
              type="button" 
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </TransactionTypeRadioBox>

            <TransactionTypeRadioBox 
              type="button" 
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Entrada</span>
            </TransactionTypeRadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}