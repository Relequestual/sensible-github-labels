# Github labels for teams that like workflows and structure.

- [Preface](#preface)
- [How to use](#how-to-use)
- [Definitions](#definitions)
- [Faces - When words fail you](#faces---when-words-fail-you)
- [Combinations](#combinations)
- [Omission](#omission)
- [Closing](#closing)

## Preface

The default Github labels may be OK for some projects, but there's no question they can be improved, and many projects add their own labels. Dave Lunny has written about a set of labels whcih he believed were saner, and made managing a project with labels much more effective. https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63

I decided to trial these labels on the repo that's responsible for the JSON-Schema website, json-schema.org. While they mostly make sense, I quickly found that some labels are a little open to interpritation. The artcile outlines the reasoning why these new labels are better than the labels Github provide, however it doesn't include any explanation for each label, which is fine given the intention, and leaves teams to work out their own interpritations that suite their needs.

If you're looking for some definitions, and maybe some examples, then hopefully my outline will give you a basis to work on. Feel free to take these and amend them as you wish.

## How to use

You don't want to be entering all of these labels manually of course! Hopefully you have node installed, and can install [git-label](https://github.com/jasonbellamy/git-label). I had no luck running the CLI version of git-label, so I created a handy script to add the labels to your Github project. The script uses the Github API, so you'll need a [Personal Access Token](https://github.com/settings/tokens) with the permission to access the repo you want to add labels for.

Checkout this repo, or just copy the script to a file of your choosing. Add your token and set the repo URI, then run the script via command line `node label-me.js`. I didn't see any point in trying to fix the CLI interface, nor making this script into a node package, as node isn't really my thing.


## Definitions
__Assignment to Issues or Pull Requests__

Most of the labels can be applied to both Issues and Pull Requests, however for some labels it may not make sense to apply it to one or the other.

### Priority

#### "Priority: Critical"
This should be dealt with ASAP. Not fiixng this issue would be a serious error.
#### "Priority: High"
After critical issues are fixed, these should be dealt with before any further issues.
#### "Priority: Medium"
This issue may be useful, and needs some attention.
#### "Priority: Low"
This issue can probably be picked up by anyone looking to contribute to the project, as an entry fix.

### Type

#### "Type: Bug"
Inconsitencies or issues which will cause an issue or problem for users or implementors.
#### "Type: Maintenance"
Updating phrasing or wording to make things clearer or removing ambiguity, without changing the functionality.
#### "Type: Enhancement"
Most issues will probably ask for additions or changes. It's expected that this type of issue will result in a Pull Request.
#### "Type: Question"
A query or seeking clarification on parts of the spec. Probably doesn't need the attention of everyone, just a few to help bring clarification or explain intent.

### Status

The status label may apply to both Issues and Pull Requests.
#### "Status: Available"
No one has claimed responsbility for resolving this issue. Generally this will be applied to bugs and enhancement issues, but may be applied to others.
#### "Status: Accepted"
It's clear what the subject of the issue is about, and what the resolution should be.
#### "Status: Blocked"
There is another issue that needs to be resolved first, or a specific person is required to comment or reply to progress. There may also be some external blocker.
#### "Status: Completed"
Nothing further to be done with this issue. Awaiting to be closed by the requestor out of politeness, or can be closed by a project member.
#### "Status: In Progress"
This issue is being worked on, and has someone assigned.
#### "Status: On Hold"
Similar to blocked, but is assigned to someone. May also be assigned to someone because of their experience, but it's recognised they are unable to process the issue at this time.
#### "Status: Review Needed"
The issue has a PR attached to it which needs to be reviewed. Should recieve review by others in the community, and at least one member / comitter. Specifics on when merging PRs is allowed is still up for debate.
#### "Status: Revision Needed"
At least two people have seen issues in the PR that makes them uneasy. Submitter of PR needs to revise the PR related to the issue.
#### "Status: Abandoned"
It's believed that this issue is no longer important to the requestor and no one else has shown an interest in it.

### Faces - When words fail you

#### "¯\\_[ツ]_/¯"
Sometimes there's so much discussion on an issue that it's no longer possible to determine what the actual issue is about anymore. As such, new issues should be created, mentioning directly this issue, and probably also specific comments. This issue (probably) won't be closed till the other related issues are resolved, and will probably be locked. 
#### "❨╯°□°❩╯︵┻━┻"
Similarly, it seems impossible for people to agree on this issue, and there's been too much discussion for anyone to reasonably read through, understand, and make sense. It probably won't get locked, and people can continue discussing, but it should not be referenced by a PR. If someone wishes to make PRs based on this issue, they should create a new issue, explaining succinctly an issue that needs addressing.

## Combinations

An issue should only have one label from the *Priority* category, and one from the *Type* category. It may make sense to combine some *Status* category labels to an issue or PR, but not others.

For example, it makes sense for an issue to be both *In Progress* and *On Hold*. The issue may have someone assigned who has started work, but is waiting for another issue to be completed first, allowing them to focus on one thing at a time. However, an issue *In Progress* cannot also be *Abandoned*

A further example, *Available* and *Accepted* could happen if the scope and resolution of the issue has clearly been agreed, but no one is currently willing to be responsible to fix it, for whatever reason. However, you would not apply *On Hold*, as there is no one assigned to the task, nor would you apply *Blocked* if nothing has been identified as a problem to resolving the issue. In addition, you wouldn't apply *Revision Needed* as there is no associated PR.



## Omission

The observent among you will notice that I've not included "Status: Pending". I don't see the value other than as meta-label. It may mean differnet things in different situations, and only adds additional information. Abiguity is not really desired! 

## Closing

As I said at the begining, take these definitions and alter them to whatever works for your project if you so wish. Faces wern't part of the article, but are part of a related Github repo, and I feel are fitting and useful for the previously mentioned JSON-Schema project. These ideas are only formed of my own personal opinion, and can hopefully be adopted by any project as an initial attempt at reasonable organisation of Issues and Pull Requests.