function getIssues(json) {
	const repo = 'https://api.github.com/repos/mray6288/javascript-fetch-lab/issues'
	fetch(repo, {
		method:'get',
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(issues) {
	list = '<ul>'
	for (let issue of issues){
		list += '<li>' + issue.title + ' - <a href="' + issue.html_url + '" target="new" data-repo="' + issue.title + '">Visit Issue</a></li>'
	}
	list += '</ul>'
	document.getElementById("issues").innerHTML = list
}

function createIssue() {
	issueTitle = document.getElementById('title').value
	issueBody = document.getElementById('body').value
	data = {title:issueTitle, body:issueBody}
  	const repo = 'https://api.github.com/repos/mray6288/javascript-fetch-lab/issues'
	fetch(repo, {
		method:'post',
		headers: {
			Authorization: `token ${getToken()}`
		},
		body: JSON.stringify(data)
	}).then(res => res.json()).then(json => getIssues(json))
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => res.json())
  	.then(json => showForkedRepo(json))
}

function showForkedRepo(repo){
	const repoElement = `<ul>${'<li>' + repo.name + ' - <a href="' + repo.html_url + '" target="new" data-repo="' + repo.name + '">Visit Repo</a></li>'}</ul>`
  	document.getElementById("results").innerHTML = repoElement
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
