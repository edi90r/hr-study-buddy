import { useState, useEffect } from 'react';
import { useForm } from 'hooks/useForm';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { SearchInput } from 'components/molecules/SearchInput/SearchInput';
import axios from 'axios';

const initialValue = {
  search: '',
};

export const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchingStudents, setSearchingStudents] = useState([]);
  const { formValues, handleInputChange } = useForm(initialValue);

  useEffect(() => {
    if (formValues.search) {
      axios
        .get(`/students?search=${formValues.search}`)
        .then(({ data: { students } }) => {
          setSearchingStudents(students);
          setActive(true);
          return;
        })
        .catch((err) => console.log(err));
    } else {
      setActive(false);
      return;
    }
  }, [formValues]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchInput
        name="search"
        id="search"
        type="text"
        value={formValues.search}
        onChange={handleInputChange}
        list={searchingStudents}
        active={active}
      />
    </SearchBarWrapper>
  );
};
