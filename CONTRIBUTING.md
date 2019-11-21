# Contributing

Thanks for being here!

### Adding a project

(Contributors)
1. Fork the repository or edit it from the [posts-manifest.js](/data/posts-manifest.js)
2. Follow this format [posts-manifest.default.js](/data/posts-manifest.default.js)
3. Name `your-project-logo.png` in kebab-case
4. Copy your project logo with _transparent background_ (.png / .jpg) into `/static/logos/`
5. Ensure that verified status must be `false` by default
6. _MUST_ provide proof! (either in blog post, whitepaper, public announcement, codebase, etc)
7. Insert social links (optional)
8. Add relevant tags (cosmos sdk, tendermint core, tendermint bft, ethermint)
9. Finally, update `posts-manifest.js` and double check
10. Create a pull request with `staging` 🚀
11. Merge into `staging` branch

(Maintainers)

12. Add labels: `project` and `WIP` to the pull request
13. When it's ready for review, remove `WIP` and add `ready for review` labels
14. Once it's been reviewed by at least 2 maintainers, remove `ready for review` label
15. Mergify will automatically merge it when [conditions](./.mergify.yml) are met

### Suggesting a project

Please use Project template when creating an issue. 🤝

## Notes 

`tendermint core`*: refers to the implementation, the engine. <br />
`tendermint bft`: refers to the concept, possibly the spec but not specifically the reference implementation.

[*] Tendermint Core is currently what's ecosystem compatible, meaning Tendermint Core chains can interoperate with other chains within Cosmos Network.
