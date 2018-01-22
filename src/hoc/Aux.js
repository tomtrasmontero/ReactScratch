// used to wrap html elements from react components with out wrapping them in
// additional html elements like a <div></div>
//
// If Using react 16.2+ you can replace this aux with just wrapping the html element
// with an empty jsx tag <> </>!!!
const aux = (props) => props.children;

export default aux;
