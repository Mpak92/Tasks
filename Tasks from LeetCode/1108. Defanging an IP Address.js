const defangIPaddr = function (address) {
  let result = address.split('.');
  result = result.join('[.]');
  return result;
};

const address = '255.100.50.0';
console.log(defangIPaddr(address));
