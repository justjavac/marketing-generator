const $ = s => document.querySelector(s)

$("#form").addEventListener("submit", (e) => {
  e.preventDefault()
  const name = $('#name').value.trim()
  const event = $('#event').value.trim()
  const other = $('#other').value.trim()
  const url = new URL(location.href)
  url.searchParams.set("name", name)
  url.searchParams.set("event", event)
  url.searchParams.set("other", other)
  history.pushState({}, document.title, url.href)
  render(name, event, other)
})

$("#copy").addEventListener("click", async (e) => {
  e.preventDefault()
  await navigator.clipboard.writeText($('#result').innerText);
  $("#copy").blur()
  $(".octicon-clippy").style.display = "none";
  $(".octicon-check").style.display = "inline-block";
  setTimeout(() => {
    $(".octicon-clippy").style.display = "inline-block";
    $(".octicon-check").style.display = "none";
  }, 2000);
})

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search)
  const name = params.get("name")
  const event = params.get("event")
  const other = params.get("other")
  $('#name').value = name
  $('#event').value = event
  $('#other').value = other
  render(name, event, other)
})

function render(name, event, other) {
  if (name && event && other) {
    $('#result').innerHTML = `<p>
            ${name}${event}是怎么回事呢？${name}相信大家都很熟悉，但是${name}${event}是怎么回事呢，下面就让小编带大家一起了解吧。
        </p>
        <p>
            ${name}${event}，其实就是${other}，大家可能会很惊讶${name}怎么会${event}呢？但事实就是这样，小编也感到非常惊讶。
        </p>
        <p>
            这就是关于${name}${event}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
        </p>`
  }
}
