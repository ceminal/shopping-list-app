import PropTypes from "prop-types";

const ListItem = ({ item, onDelete }) => {

  return (
    <li className="flex justify-between items-center my-2">
      {item.title} <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};
