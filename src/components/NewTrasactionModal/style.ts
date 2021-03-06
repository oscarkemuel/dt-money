import styled from "styled-components";
import { darken, transparentize } from 'polished';

interface TransactionTypeRadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid var(--input-border);
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--input-background);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    border-radius: 0.25rem;
    color: var(--shape);
    background: var(--green);
    border: none;
    font-weight: 600;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const colors = {
  green: '#33CC95',
  red: '#e52e4d'
}

export const TransactionTypeRadioBox = styled.button<TransactionTypeRadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  padding: 0 1.5rem;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;

  background: ${({isActive, activeColor}) =>  {
    return isActive ? transparentize(0.8, colors[activeColor]) : 'transparent';
  }};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
    font-weight: 400;
  }
`