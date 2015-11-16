/**
 * Created by ur5fot on 12.11.15.
 */
document.addEventListener('DOMContentLoaded', yogahotTooltip);

function yogahotTooltip() {
    document.addEventListener('click', tooltipShow);
    var x, y, t, showTooltip;

    function tooltipShow(event) {
        t = event.target;
        y = event.pageY;
        x = event.pageX;

        if (t.hasAttribute('data-tooltip') && !showTooltip) {
            var tooltipE = document.createElement('div');
            tooltipE.className = 'tooltip';
            tooltipE.innerHTML = t.getAttribute('data-tooltip');
            document.body.appendChild(tooltipE);
            showTooltip = tooltipE;

            if (tooltipE.offsetWidth + 15 < x) {
                tooltipE.style.left = x - 15 - tooltipE.offsetWidth + 'px';
            } else if (tooltipE.offsetWidth + 15 > x) {
                tooltipE.style.left = x + 15 + 'px';
            }

            if (tooltipE.offsetHeight + 15 < y) {
                tooltipE.style.top = y - 15 - tooltipE.offsetHeight + 'px';
            } else if (tooltipE.offsetWidth + 15 >= y) {
                tooltipE.style.top = y + 15 + 'px';
            }

        } else {
            return
        }
    }

    document.addEventListener('mouseout', tooltipHide);
    function tooltipHide(event) {
        if (showTooltip) {
            document.body.removeChild(showTooltip);
            showTooltip = false;
        } else {
            return
        }
    }

};