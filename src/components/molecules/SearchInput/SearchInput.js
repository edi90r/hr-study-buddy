import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import {
  InputWrapper,
  SearchMenuList,
  SearchListItem,
} from 'components/molecules/SearchInput/SearchInput.styles';

export const SearchInput = ({
  name,
  id,
  type,
  value,
  active,
  onChange,
  list,
}) => {
  return (
    <InputWrapper>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      <SearchMenuList active={active}>
        {list.length ? (
          list.map((item, index) => (
            <SearchListItem to={`/`} key={index}>
              {item.name}
            </SearchListItem>
          ))
        ) : (
          <SearchListItem to={`/`}>There is no results</SearchListItem>
        )}
      </SearchMenuList>
    </InputWrapper>
  );
};

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
