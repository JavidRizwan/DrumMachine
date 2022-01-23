import Button from "./Button";

const Drumpad = ({ setKeyName, audioBank }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="row justify-content-center">
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={0} />
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={1} />
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={2} />
        </div>
        <div className="row justify-content-center">
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={3} />
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={4} />
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={5} />
        </div>
        <div className="row justify-content-center">
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={6} />
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={7} />
          <Button setKeyName={setKeyName} audioBank={audioBank} keyId={8} />
        </div>
      </div>
    </div>
  );
};

export default Drumpad;
