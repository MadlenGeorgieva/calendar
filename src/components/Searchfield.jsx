export default function Searchfield({ handleInputChange, filter }) {
  return (
    <input
      type="search"
      placeholder="Search events..."
      value={filter}
      onChange={handleInputChange}
    />
  );
}
