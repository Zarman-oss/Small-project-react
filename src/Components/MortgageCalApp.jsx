import Header from './Header';
import FormGroup from './FormGroup';

function MortgageCalApp() {
  return (
    <div className="container mt-4 card" style={{ width: 500 }}>
      <div className="container-1">
        <Header text={'Mortgage Calculator For Your Home'} />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          className="d-grid"
          style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
        >
          <FormGroup
            labelText={'Home Value'}
            inputType={'number'}
            placeholder="Enter the value of home"
          />{' '}
          <FormGroup
            labelText={'Down Payment'}
            inputType={'number'}
            placeholder="Enter the payment"
          />
        </div>
        <FormGroup
          labelText={'Down Payment'}
          inputType={'number'}
          placeholder="Enter the payment"
        />
           <div
          className="d-grid"
          style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
        >
          <FormGroup
            labelText={'Home Value'}
            inputType={'number'}
            placeholder="Enter the value of home"
          />{' '}
          <FormGroup
            labelText={'Down Payment'}
            inputType={'number'}
            placeholder="Enter the payment"
          />
        </div>
      </form>
    </div>
  );
}

export default MortgageCalApp;
