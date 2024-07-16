---
title: Symfony bundle to isolate doctrine database tests and improve test performance
description: This bundle provides features that help you run your Symfony-framework-based App's testsuite more efficiently with isolated tests.
package_name: dama/doctrine-test-bundle
package_version: ^8.2
tags:
 - testing
 - fixtures
---

This bundle provides features that help you run your Symfony-framework-based App's testsuite more efficiently with isolated tests.

Instead of cleaning up DB after each test this bundle wraps DB interaction in transactions and just rolls them back once the test is over. This results in a performance boost as there is no need to rebuild the schema, import a backup SQL dump or re-insert fixtures before every testcase.

It also speeds up EntityManager data and query cache with included `Psr6StaticArrayCache`. This is especially beneficial if you have a lot of tests that boot kernels (like Controller tests or ContainerAware tests) and use Doctrine entities.
