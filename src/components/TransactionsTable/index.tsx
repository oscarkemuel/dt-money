import { useTransactions } from "../../hooks/useTransactions";
import { numberToRealString } from "../../utils/Numbers";
import { Container } from "./styles";

export function TransactionsTable() {
  const {transactions} = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            const date = new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.created_at));

            const amount = numberToRealString(transaction.amount);
            
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw' && '- ' } 
                  {amount}
                </td>
                <td>{transaction.category}</td>
                <td>{date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}