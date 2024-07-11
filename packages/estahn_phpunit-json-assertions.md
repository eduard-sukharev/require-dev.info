---
title: PHP unit testing framework
description: JSON assertions for PHPUnit (including JSON Schema)
package_name: estahn/phpunit-json-assertions
package_version: ^4.0
tags:
 - testing
---

JSON assertions for PHPUnit includes traits/methods to help validate your JSON data through various methods.

## Features

* Validate your JSON data via JSON Schema
    * describes your existing data format
    * clear, human- and machine-readable documentation
    * complete structural validation, useful for
        * automated testing
        * validating client-submitted data
    * See more details [here](http://json-schema.org/)
* Access JSON data through expressions (e.g. `foo.bar[3]`)
    * See more details [here](http://jmespath.org/examples.html)
