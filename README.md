# South African Fake Id Generator
### What does it do?
This package generates valid and invalid fake (random) South African Identity numbers.

This library can also check if the ID number supplied is a valid SouthAfrican ID number.

### How to use it?
Download the library from NPM using the following command in a terminal:
```

 npm install --save south-african-fake-id-generator

```
### Usage In NodeJS

```

 var fakeSaIdGenerator = require('south-african-fake-id-generator');

 // Generate valid random id number
 var fakeId = fakeSaIdGenerator.generateFakeId();

 // Generate invalid random id number
 var fakeId = fakeSaIdGenerator.generateInvalidFakeId();

 // Generate valid random id number by age
 var fakeId = fakeSaIdGenerator.generateFakeIdByAge(23);

 // Generate invalid random id number by age
 var fakeId = fakeSaIdGenerator.generateInvalidFakeIdByAge(78);

 // Check if Id number is valid
 var fakeId = fakeSaIdGenerator.isValid(9701286633088);  // false

```

License
-------

Copyright 2020, Ayabonga Qwabi

This library can be used free of charge under either the ISC license
or the GNU GPL 3.0.

- [https://opensource.org/licenses/ISC](https://opensource.org/licenses/ISC)
- [http://www.gnu.org/licenses/gpl-3.0.html](http://www.gnu.org/licenses/gpl-3.0.html)