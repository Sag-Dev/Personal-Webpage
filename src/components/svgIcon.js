import React from 'react';

const ICONS = {
  mail: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/></svg>,
  telegram: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>,
  linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
  github: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,

  teamwork: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>,
  technologies: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 2h-2v-2h2v2zm-8 6h-2v2h2v-2zm0-5c0-.551.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3v4h2v-4zm0 8h-2v2h2v-2zm14-11h-2v2h2v-2zm-3 0h-2v2h2v-2zm-11 14h-2v2h2v-2zm18-2.042h-2.277l-2.36 5.386-2.883-7.93-2.442 5.78-2.071-4.14-1.129 1.966h-2.838v6.98h16v-8.042zm-16 .063h2.259l1.768-3.081 1.935 3.866 2.589-6.126 2.899 7.976 1.62-3.697h2.93v-6.959h-16v8.021zm10 11.979h2v-2h-2v2zm8-11h2v-2h-2v2zm-20 8v-4h-2v4c0 1.657 1.343 3 3 3h4v-2h-4c-.552 0-1-.449-1-1zm20 0c0 .551-.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3v-4h-2v4zm0-11h2v-2h-2v2zm0 6h2v-2h-2v2zm2-13c0-1.657-1.343-3-3-3h-4v2h4c.552 0 1 .449 1 1v4h2v-4zm-16 21h2v-2h-2v2zm3 0h2v-2h-2v2z"/></svg>,
  opensource: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  platforms: <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M22 10h-1v-2h-11v13h5v1.617c0 .524.121 1.058.502 1.383h-5.002c-.398 0-.779-.158-1.061-.439-.281-.282-.439-.663-.439-1.061v-15c0-.398.158-.779.439-1.061.282-.281.663-.439 1.061-.439h10c.398 0 .779.158 1.061.439.281.282.439.663.439 1.061v2.5zm2 2.25c0-.69-.56-1.25-1.25-1.25h-5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-10.5zm-15.407 11.75h-6.593l2.599-3h3.401v1.804c0 .579.337 1.09.593 1.196zm11.407-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3-3v-6.024h-6v6.024h6zm-2-15h-2v-3h-17v15h6v2h-8v-19h21v5zm-.5 7h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1c.275 0 .5-.224.5-.5s-.225-.5-.5-.5z"/></svg>,
  languages: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.604 16.111c.018.276.048.531.092.758-.583.106-.606-.469-.092-.758zm-4.354.16h.996l-.498-1.43-.498 1.43zm2.75-6.105c3.697 0 7 2.465 7 5.837 0 1.196-.432 2.37-1.193 3.281-.033 1.068.596 2.6 1.162 3.715-1.518-.274-3.676-.88-4.654-1.48-5.387 1.313-9.315-1.984-9.315-5.516 0-3.39 3.326-5.837 7-5.837zm-.437 7.584l-1.44-3.792h-.76l-1.447 3.792h.812l.312-.875h1.422l.313.875h.788zm3.988-2.296l.079-.353-.642-.125-.064.292c-.215-.032-.445-.036-.679-.012l.028-.458h.717v-.608h-.631l.084-.335-.627-.188c-.046.154-.084.304-.123.523h-.715v.608h.638c-.018.196-.026.399-.03.605-.704.259-1.002.751-1.002 1.198 0 .528.416.992 1.074.932.817-.074 1.362-.691 1.682-1.45.332.19.471.511.346.807-.115.275-.455.536-1.104.523v.654c.721.011 1.429-.262 1.707-.923.27-.647-.041-1.352-.738-1.69zm-1.25 1.073c.17-.177.305-.401.407-.626-.147-.013-.306-.009-.462.012.011.22.028.425.055.614zm-10.492 2.703c-1.887-.271-3.571-1.165-4.827-2.478-.182-.189-.315-.636-.019-.819l.302-.078c.235-.199-.221-1.009-.04-1.14.561-.401.295-.893-.051-1.299-.146-.172-.948-1-1.038-.853.067-.226-.146-.772-.274-.987-.217-.362-.502-.585-.617-.982-.046-.158-.046-.64-.139-.751-.038-.045-.327-.167-.317-.233.278-1.655 1.044-3.143 2.149-4.318l.746-.301c.468-.703.495-.158.916-.341.141 0 .301-.578.452-.667.261-.169.062-.169.013-.245-.104-.168 2.191-1.003 2.229-.853.032.127-1.135.734-1.007.716-.296.039-.352.571-.297.568.147-.005 1.074-.704 1.506-.555.423.146 1.183-.336 1.48-.582.149-.125.286-.344.483-.344.909 0 2.268.374 2.579.56.474.283-.204.263-.277.447-.058.142-.19.335-.249.412-.102.133-.399.077-.341-.082.059-.167.348-.231-.086-.271-.445-.041-.568-.341-1.014.034-.134.113-.234.286-.321.433-.123.21-.42.201-.544.396-.12.192.07.512.304.371.062-.038.765.645.674.095-.059-.364.196-.612.201-.887.003-.184.28-.066.206.03-.097.121-.203.534.051.554.096.008.339-.158.425-.084-.096-.002-.315.383-.3.376-.108.048-.233-.021-.15.21.074.228-.408.201-.495.247-.037.02-.417-.114-.408-.028-.131-.109.037-.379-.072-.422-.11.168-.058.512-.294.512-.202 0-.482.229-.604.369-.087.097-.609.308-.666.302.299.031.286.25.261.437-.06.433-.995.032-.956.196.038.158-.107.586-.139.724-.029.125.402.205.378.267.002-.007.583-.199.64-.25l.131-.293c.11-.073.226-.133.35-.179l.149-.258c.05-.02.645-.112.686-.092.149.068.428.353.532.483.036.047.227.117.227.188.069.107-.051.148-.006.223.104.193.132-.401.087-.29 0-.189.142.071.174.049l-.657-.654c-.204-.342.543.183.64.247.096.063.285.629.537.501.158-.08-.004-.139.106-.229l.449-.09c-.357.261.279.602.182.556.16.074.254-.058.354-.021.057.022.663.015.566-.082.151.076.082.748-.044.851-.204.169-1.182.1-1.399-.057-.361-.262-.297.279-.473.352-.344.142-.857-.463-1.218-.482.176.026.015-.445.015-.478-.139-.171-1.02.019-1.252.05-.434.058-.89.052-1.223.324-.234.189-.237.5-.477.651-.156.095-.325.064-.456.189-.234.222-.504.552-.637.845-.054.123.072.416.041.574-.307.967.076 2.308 1.248 2.456.25.032.506.144.759.117 1.332-2.88 4.568-4.92 8.347-4.92.932 0 1.831.124 2.678.354-1.105-4.322-5.012-7.521-9.678-7.521-5.523 0-10 4.477-10 10s4.477 10 10 10l.074-.004c-.509-.533-.931-1.128-1.265-1.766zm4.778-13.035c.068-.008-.089.138-.089.138.027.212.183.327.479.435.36.129.03.375-.176.317-.114-.032-.704-.21-.725.021 0 .138-.56.001-.473-.145.061-.098.041-.319.152-.464.16-.21.313-.096.318.026.002.327.332-.306.514-.328zm-4.532-.292c.08.113.688-.163.591-.146.187-.094.024-.104-.082-.159-.035-.179-.065-.456-.177-.566l.074-.085c-.173-.249-.301.302-.301.302l.09-.026-.042.113c.071.129.019.207.007.277l-.124.077c-.045.055.215.062.217.071.009.028-.313.074-.253.142zm-.396-.286c-.069.071.002.116.073.085.104-.045.244-.044.26-.183l.066-.084c.029-.043-.057-.114-.092-.121l-.124.086-.061.016-.056.072.006.04-.072.089zm2.634 2.107c-.055 0-.369.029-.34.084.178.293.403-.076.34-.084z"/></svg>,
  programming: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>,
  demo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>,
}

const Icon = props => {
    return ICONS[props.name]? ICONS[props.name] : "Missing icon: " + props.name;
}

export default Icon;