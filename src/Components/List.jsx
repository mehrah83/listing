// eslint-disable-next-line react/prop-types
const List = ({ listing }) => {
  return (
    <>
              <table>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
                 {
                  // eslint-disable-next-line react/prop-types
                  listing.map((currElem) => {
                    return (
                      <>
                      <tr>
                      <td>{currElem.title}</td>
                      <td>{currElem.desc}</td>
                      </tr>
                      </>
                    )
                  })
                 }
              </table>
            </>
          );
};

export default List;
