const nodegit = require("nodegit");
const path = require("path");
const argv = require('minimist')(process.argv.slice(2));

const {name, author} = argv;

nodegit.Repository.open(path.resolve(__dirname, ".git"))
    .then(repo =>
        repo.refreshIndex().then(
            index => index.addAll()
                .then(()=> index.write())
                .then(()=> index.writeTree())
                .then(oid => nodegit.Reference.nameToId(repo, "HEAD")
                    .then(head => repo.getCommit(head))
                    .then(parent => {
                        const authorSig = nodegit.Signature.create(author,
                            author, Math.round(Date.now() / 1000), 0);
                        const committerSig = nodegit.Signature.create(author,
                            author, Math.round(Date.now() / 1000), 0);

                        return repo.createCommit("HEAD", authorSig, committerSig, name, oid, [parent]);
                    })
                    .then(commitId =>
                        nodegit.Commit.lookup(repo, commitId)
                            .then(commit=>
                                nodegit.Tag.create(repo, name, commit, repo.defaultSignature(), name, 1)
                            )
                    )
                )
        )
    )
    .done(function (tagId) {
        console.log("Tag id: ", tagId);
    });