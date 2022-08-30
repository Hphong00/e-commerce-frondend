const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <b>{item.title}</b>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default Table;