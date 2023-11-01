import { useState } from 'react';
import React from 'react';

type Props = {
  list: string[];
};

export default function SearchableList({ list }: Props) {
  const [searchText, setSearchText] = useState('');
  const searchedItem = list.filter((list) =>
    list.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
  const quotes = searchedItem.map((list, index) => <li key={index}>{list}</li>);
  const message = <li>No items match the filter.</li>;
  return (
    <div className="wrapper">
      <SearchBar searchText={searchText} onChange={setSearchText} />
      <ul>{searchedItem.length > 0 ? quotes : message}</ul>
    </div>
  );
}

type SearchProps = {
  searchText: string;
  onChange: (value: string) => void;
};

function SearchBar({ searchText, onChange }: SearchProps) {
  return (
    <input
      className="search"
      type="text"
      placeholder="search"
      value={searchText}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
