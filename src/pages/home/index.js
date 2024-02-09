import React, { useState, memo } from 'react';

function HomePage() {
  const [count, setCount] = useState(0);
  console.log('home page');
  return (
    <>
      <h1>Home page</h1>
      <button type="button" name="button" onClick={() => setCount(count + 1)}>
        Click me{count}
      </button>
      <MemoizedChildOne />
    </>
  );
}

function ChildOne() {
  console.log('Child One');
  return (
    <>
      <h1>Child One</h1>
      <ChildTwo />
    </>
  );
}

const MemoizedChildOne = memo(ChildOne);

function ChildTwo() {
  console.log('Child Two');
  return <h1>Child One</h1>;
}

export default HomePage;
